declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Utility function to send GA4 custom events safely in browser context.
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

/**
 * Track LinkedIn link click
 */
export function trackLinkedInClick() {
  trackEvent("linkedin_click");
}

/**
 * Track GitHub link click
 */
export function trackGitHubClick() {
  trackEvent("github_click");
}

/**
 * Track Contact/Email link or CTA click
 */
export function trackContactClick() {
  trackEvent("contact_click");
}

/**
 * Track Project card/link click
 * @param projectName Name of the clicked project
 */
export function trackProjectClick(projectName: string) {
  trackEvent("project_click", { project_name: projectName });
}

/**
 * Track successful contact form submission
 */
export function trackFormSubmit() {
  trackEvent("generate_lead");
}
