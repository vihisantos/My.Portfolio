declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

export function trackPageView(path?: string) {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", "G-SBC8653FRP", {
      page_path: path || window.location.pathname,
    });
  }
}

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
) {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", eventName, eventParams);
  }
}

export function trackDownload(projectName?: string) {
  trackEvent("download", {
    event_category: "engagement",
    event_label: projectName || "cv",
  });
}

export function trackExternalLink(url: string, label: string) {
  trackEvent("click", {
    event_category: "external_link",
    event_label: label,
    url: url,
  });
}

export function trackProjectView(projectId: string, projectName: string) {
  trackEvent("view_item", {
    event_category: "project",
    item_id: projectId,
    item_name: projectName,
  });
}

export function trackFormSubmission(formName: string, success: boolean) {
  trackEvent(success ? "form_submit_success" : "form_submit_failure", {
    event_category: "form",
    form_name: formName,
  });
}

export function trackSocialClick(platform: string) {
  trackEvent("click", {
    event_category: "social",
    event_label: platform,
  });
}

export function trackThemeChange(theme: "dark" | "light") {
  trackEvent("change_theme", {
    event_category: "preference",
    theme: theme,
  });
}

export function trackLanguageChange(language: string) {
  trackEvent("change_language", {
    event_category: "preference",
    language: language,
  });
}