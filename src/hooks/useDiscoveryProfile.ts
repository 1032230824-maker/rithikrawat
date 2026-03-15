import { useState, useEffect, useCallback } from "react";

export interface DiscoveryProfile {
  visitorType: string | null;
  growthFocus: string | null;
  supportNeeded: string | null;
  completedAt: string | null;
}

const STORAGE_KEY = "rr-discovery-profile";

const SECTION_RELEVANCE: Record<string, string[]> = {
  "Real Estate Developer": ["real-estate", "portfolio", "services"],
  "Business Owner": ["services", "who-i-help", "portfolio"],
  "Startup Founder": ["services", "skills", "who-i-help"],
  "Marketing Agency": ["portfolio", "skills", "services"],
  "Entrepreneur / Personal Brand": ["about", "portfolio", "who-i-help"],
};

export function saveDiscoveryProfile(profile: Partial<DiscoveryProfile>) {
  const existing = getStoredProfile();
  const updated = { ...existing, ...profile };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event("discovery-profile-updated"));
}

function getStoredProfile(): DiscoveryProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { visitorType: null, growthFocus: null, supportNeeded: null, completedAt: null };
}

export function useDiscoveryProfile() {
  const [profile, setProfile] = useState<DiscoveryProfile>(getStoredProfile);

  useEffect(() => {
    const handler = () => setProfile(getStoredProfile());
    window.addEventListener("discovery-profile-updated", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("discovery-profile-updated", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const isRelevantSection = useCallback(
    (sectionId: string) => {
      if (!profile.visitorType) return false;
      const relevant = SECTION_RELEVANCE[profile.visitorType] || [];
      return relevant.includes(sectionId);
    },
    [profile.visitorType]
  );

  const topSections = profile.visitorType
    ? SECTION_RELEVANCE[profile.visitorType] || []
    : [];

  return { profile, isRelevantSection, topSections, hasProfile: !!profile.completedAt };
}
