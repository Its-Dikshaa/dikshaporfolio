declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Utility function to send GA4 custom events safely in browser context.
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // Ensure window.dataLayer and window.gtag are initialized even before gtag.js loads
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
  }

  // Dispatch event to GA4
  if (params && Object.keys(params).length > 0) {
    window.gtag("event", eventName, params);
  } else {
    window.gtag("event", eventName);
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
