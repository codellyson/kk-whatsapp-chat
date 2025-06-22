import "./style.css";

// SVG Icons
const SVG_ICONS = {
  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
  </svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
  </svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
  </svg>`,
  paperPlane: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </svg>`,
  times: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>`,
};

interface Member {
  id?: string;
  name: string;
  phone: string;
  avatar: string;
  department?: string;
  title?: string;
  skills?: string[];
  isOnline?: boolean;
}

interface BusinessInfo {
  name: string;
  tagline?: string;
  logo?: string;
  description?: string;
}

interface BusinessHours {
  enabled: boolean;
  timezone?: string;
  schedule: {
    [day: string]: { open: string; close: string } | null;
  };
  offlineMessage?: string;
}

interface Department {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  members: Member[];
}

interface QuickMessage {
  label: string;
  text: string;
}

interface QuickMessageCategory {
  category: string;
  messages: QuickMessage[];
}

interface AnalyticsConfig {
  enabled: boolean;
  events?: {
    onWidgetOpen?: (data: any) => void;
    onMemberSelect?: (member: Member) => void;
    onMessageSent?: (member: Member, message: string) => void;
    onWidgetClose?: () => void;
    onLeadCapture?: (leadData: any) => void;
  };
  trackingId?: string;
}

interface LocalizationConfig {
  language: string;
  translations: {
    headerTitle: string;
    headerDescription: string;
    messagePlaceholder: string;
    sendButton: string;
    offlineMessage: string;
    departmentSelector: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    companyLabel: string;
    submitButton: string;
    backButton: string;
    selectMember: string;
    businessHours: string;
    quickMessages: string;
  };
}

interface LeadCaptureField {
  required: boolean;
  placeholder: string;
  type?: "text" | "email" | "tel" | "url";
}

interface LeadCaptureConfig {
  enabled: boolean;
  showBefore?: "member-selection" | "message-send" | "both";
  fields: {
    name?: LeadCaptureField;
    email?: LeadCaptureField;
    phone?: LeadCaptureField;
    company?: LeadCaptureField;
  };
  onLeadCapture?: (leadData: any) => void;
}

interface ThemeConfig {
  // preset?: "modern" | "classic" | "minimal" | "corporate";
  brandColors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  typography?: {
    fontFamily: string;
    fontSize: string;
  };
}

interface WidgetConfig {
  // Core configuration
  styles?: {
    button?: {
      backgroundColor?: string;
      color?: string;
    };
  };
  members?: Member[];

  // Business features
  businessInfo?: BusinessInfo;
  businessHours?: BusinessHours;
  departments?: Department[];
  quickMessages?: QuickMessageCategory[];
  analytics?: AnalyticsConfig;
  localization?: LocalizationConfig;
  leadCapture?: LeadCaptureConfig;
  theme?: ThemeConfig;

  // Widget behavior
  position?: "bottom-right" | "bottom-left";
  showBranding?: boolean;
  autoOpen?: boolean;
  welcomeMessage?: string;
}

class WhatsAppWidget {
  private config!: WidgetConfig;
  private mountElement!: HTMLElement;
  private isOpen: boolean = false;
  private currentView: "main" | "departments" | "members" | "lead-capture" =
    "main";
  private selectedDepartment: Department | null = null;
  private leadData: any = {};
  private translations!: LocalizationConfig["translations"];

  constructor(widgetMountElId: string, config: WidgetConfig) {
    const mountElement = document.querySelector(widgetMountElId) as HTMLElement;
    if (!mountElement) {
      console.error("WhatsApp Widget: Mount element not found");
      return;
    }

    this.mountElement = mountElement;
    this.config = this.mergeWithDefaults(config);
    this.translations =
      this.config.localization?.translations || this.getDefaultTranslations();

    this.init();
  }

  private mergeWithDefaults(config: WidgetConfig): WidgetConfig {
    return {
      position: "bottom-right",
      showBranding: true,
      autoOpen: false,
      localization: {
        language: "en",
        translations: this.getDefaultTranslations(),
      },
      analytics: {
        enabled: false,
      },
      leadCapture: {
        enabled: false,
        fields: {},
        showBefore: "member-selection",
      },
      businessHours: {
        enabled: false,
        schedule: {},
      },
      ...config,
    };
  }

  private getDefaultTranslations(): LocalizationConfig["translations"] {
    return {
      headerTitle: "WhatsApp",
      headerDescription:
        "Hi! Click one of our members below to chat on WhatsApp",
      messagePlaceholder: "Type your message here...",
      sendButton: "Send",
      offlineMessage:
        "We are currently offline. Please leave a message and we will get back to you.",
      departmentSelector: "Select Department",
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      companyLabel: "Company",
      submitButton: "Continue to Chat",
      backButton: "Back",
      selectMember: "Select a team member",
      businessHours: "Business Hours",
      quickMessages: "Quick Messages",
    };
  }

  private init() {
    this.mountElement.classList.add("kk_wa-widget");
    this.applyPositioning();
    this.applyTheme();
    this.createButton();

    if (this.config.autoOpen) {
      setTimeout(() => this.toggleWidget(), 1000);
    }
  }

  private applyPositioning() {
    const position = this.config.position || "bottom-right";
    this.mountElement.classList.add(`kk_wa-position-${position}`);
  }

  private applyTheme() {
    if (this.config.theme?.brandColors) {
      const colors = this.config.theme.brandColors;
      const root = document.documentElement;

      if (colors.primary)
        root.style.setProperty("--kk_wa-primary-color", colors.primary);
      if (colors.secondary)
        root.style.setProperty("--kk_wa-secondary-color", colors.secondary);
      if (colors.accent)
        root.style.setProperty("--kk_wa-accent-color", colors.accent);
    }

    if (this.config.theme?.typography) {
      const typography = this.config.theme.typography;
      const root = document.documentElement;

      if (typography.fontFamily)
        root.style.setProperty("--kk_wa-font-family", typography.fontFamily);
      if (typography.fontSize)
        root.style.setProperty("--kk_wa-font-size-base", typography.fontSize);
    }
  }

  private createButton() {
    const existingButton = this.mountElement.querySelector(".kk_wa-button");
    if (existingButton) {
      existingButton.remove();
    }

    const chatButton = document.createElement("button");
    chatButton.classList.add("kk_wa-button");
    chatButton.innerHTML = SVG_ICONS.whatsapp;
    chatButton.setAttribute("aria-label", "Open WhatsApp Chat");

    chatButton.addEventListener("click", () => {
      this.toggleWidget();
    });

    this.mountElement.appendChild(chatButton);
  }

  private toggleWidget() {
    if (this.isOpen) {
      this.closeWidget();
    } else {
      this.openWidget();
    }
  }

  private openWidget() {
    this.isOpen = true;
    this.trackEvent("onWidgetOpen", { timestamp: new Date().toISOString() });

    if (
      this.config.leadCapture?.enabled &&
      this.config.leadCapture.showBefore === "member-selection"
    ) {
      this.showLeadCaptureForm();
    } else {
      this.showMainView();
    }
  }

  private closeWidget() {
    this.isOpen = false;
    this.currentView = "main";
    this.selectedDepartment = null;

    const existingContainer = this.mountElement.querySelector(
      ".kk_wa-chat-container"
    );
    if (existingContainer) {
      existingContainer.remove();
    }

    this.trackEvent("onWidgetClose", {});
  }

  private showLeadCaptureForm() {
    this.currentView = "lead-capture";
    this.createChatContainer();

    const container = this.mountElement.querySelector(
      ".kk_wa-chat-container"
    ) as HTMLElement;
    const content = container.querySelector(".kk_wa-content") as HTMLElement;

    content.innerHTML = this.getLeadCaptureFormHTML();
    this.attachLeadCaptureListeners();
    this.showBranding(container);
  }

  private getLeadCaptureFormHTML(): string {
    const fields = this.config.leadCapture?.fields || {};
    let fieldsHTML = "";

    Object.entries(fields).forEach(([key, field]) => {
      if (field) {
        const type =
          field.type ||
          (key === "email" ? "email" : key === "phone" ? "tel" : "text");
        fieldsHTML += `
          <div class="kk_wa-form-field">
            <label for="kk_wa-${key}">${
          this.translations[`${key}Label` as keyof typeof this.translations]
        }</label>
            <input 
              type="${type}" 
              id="kk_wa-${key}" 
              name="${key}"
              placeholder="${field.placeholder}"
              ${field.required ? "required" : ""}
              class="kk_wa-form-input">
          </div>
        `;
      }
    });

    return `
      <div class="kk_wa-lead-form">
        <h3>Let's connect!</h3>
        <p>Please provide your details to start the conversation.</p>
        <form id="kk_wa-lead-form">
          ${fieldsHTML}
          <div class="kk_wa-form-actions">
            <button type="submit" class="kk_wa-submit-btn">${this.translations.submitButton}</button>
          </div>
        </form>
      </div>
    `;
  }

  private attachLeadCaptureListeners() {
    const form = this.mountElement.querySelector(
      "#kk_wa-lead-form"
    ) as HTMLFormElement;
    form?.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const leadData: any = {};

      formData.forEach((value, key) => {
        leadData[key] = value;
      });

      this.leadData = leadData;
      this.trackEvent("onLeadCapture", leadData);

      if (this.config.leadCapture?.onLeadCapture) {
        this.config.leadCapture.onLeadCapture(leadData);
      }

      this.showMainView();
    });
  }

  private showMainView() {
    this.currentView = "main";
    this.createChatContainer();

    if (this.config.departments && this.config.departments.length > 0) {
      this.showDepartments();
    } else {
      this.showMembers();
    }
  }

  private showDepartments() {
    const container = this.mountElement.querySelector(
      ".kk_wa-chat-container"
    ) as HTMLElement;
    const content = container.querySelector(".kk_wa-content") as HTMLElement;

    let departmentsHTML = '<div class="kk_wa-departments-list">';

    this.config.departments?.forEach((department) => {
      departmentsHTML += `
        <div class="kk_wa-department-card" data-department-id="${
          department.id
        }">
          ${
            department.icon
              ? `<div class="kk_wa-department-icon">${department.icon}</div>`
              : ""
          }
          <div class="kk_wa-department-info">
            <h4>${department.name}</h4>
            ${department.description ? `<p>${department.description}</p>` : ""}
            <span class="kk_wa-member-count">${
              department.members.length
            } member${department.members.length !== 1 ? "s" : ""}</span>
          </div>
          <div class="kk_wa-department-arrow">
${SVG_ICONS.chevronRight}
          </div>
        </div>
      `;
    });

    departmentsHTML += "</div>";
    content.innerHTML = departmentsHTML;

    // Attach department selection listeners
    const departmentCards = content.querySelectorAll(".kk_wa-department-card");
    departmentCards.forEach((card) => {
      card.addEventListener("click", () => {
        const departmentId = card.getAttribute("data-department-id");
        const department = this.config.departments?.find(
          (d) => d.id === departmentId
        );
        if (department) {
          this.selectedDepartment = department;
          this.showMembers();
        }
      });
    });

    // Show branding
    this.showBranding(container);
  }

  private showMembers() {
    const container = this.mountElement.querySelector(
      ".kk_wa-chat-container"
    ) as HTMLElement;
    const content = container.querySelector(".kk_wa-content") as HTMLElement;

    const members =
      this.selectedDepartment?.members || this.config.members || [];

    let membersHTML = "";

    // Add back button if we came from departments
    if (this.selectedDepartment && this.config.departments) {
      membersHTML += `
        <div class="kk_wa-back-button" id="kk_wa-back-to-departments">
${SVG_ICONS.arrowLeft} ${this.translations.backButton}
        </div>
      `;
    }

    // Add business hours info if enabled
    if (this.config.businessHours?.enabled && !this.isBusinessHours()) {
      membersHTML += `
        <div class="kk_wa-offline-notice">
${SVG_ICONS.clock}
          <p>${
            this.config.businessHours.offlineMessage ||
            this.translations.offlineMessage
          }</p>
        </div>
      `;
    }

    membersHTML += '<div class="kk_wa-members-list">';

    members.forEach((member) => {
      const isOnline = this.isBusinessHours() && member.isOnline !== false;
      membersHTML += `
        <div class="kk_wa-member-container">
          <div class="kk_wa-member-card" data-member-id="${
            member.id || member.name
          }">
            <div class="kk_wa-member-avatar">
              <img src="${member.avatar}" alt="${
        member.name
      }" class="kk_wa-member-avatar-img">
              ${isOnline ? '<div class="kk_wa-online-indicator"></div>' : ""}
            </div>
            <div class="kk_wa-member-info">
              <h3>${member.name}</h3>
              ${
                member.title
                  ? `<p class="kk_wa-member-title">${member.title}</p>`
                  : ""
              }
              <p class="kk_wa-member-phone">${member.phone}</p>
              ${
                member.skills
                  ? `<div class="kk_wa-member-skills">${member.skills
                      .map(
                        (skill) =>
                          `<span class="kk_wa-skill-tag">${skill}</span>`
                      )
                      .join("")}</div>`
                  : ""
              }
            </div>
            <div class="kk_wa-member-action">
${SVG_ICONS.whatsapp}
            </div>
          </div>
        </div>
      `;
    });

    membersHTML += "</div>";
    content.innerHTML = membersHTML;

    // Attach member click listeners
    const memberCards = content.querySelectorAll(".kk_wa-member-card");
    memberCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        e.stopPropagation();
        const memberId = card.getAttribute("data-member-id");
        const member = members.find((m) => (m.id || m.name) === memberId);
        if (member) {
          this.selectMember(member);
        }
      });
    });

    // Attach back button listener
    const backButton = content.querySelector("#kk_wa-back-to-departments");
    backButton?.addEventListener("click", () => {
      this.selectedDepartment = null;
      this.showDepartments();
    });

    // Show branding
    this.showBranding(container);
  }

  private selectMember(member: Member) {
    this.trackEvent("onMemberSelect", member);

    const memberContainer = this.mountElement
      .querySelector(`[data-member-id="${member.id || member.name}"]`)
      ?.closest(".kk_wa-member-container") as HTMLElement;
    if (memberContainer) {
      this.createChatInputGroup(memberContainer, member);
    }
  }

  private createChatInputGroup(memberContainer: HTMLElement, member: Member) {
    const existingInputGroup = memberContainer.querySelector(
      ".kk_wa-member-chat-input-group"
    );

    if (existingInputGroup) {
      existingInputGroup.classList.toggle(
        "kk_wa-member-chat-input-group-active"
      );
      return;
    }

    const inputGroup = document.createElement("div");
    inputGroup.classList.add("kk_wa-member-chat-input-group");

    // Quick messages section
    let quickMessagesHTML = "";
    if (this.config.quickMessages && this.config.quickMessages.length > 0) {
      quickMessagesHTML = `
        <div class="kk_wa-quick-messages">
          <span class="kk_wa-quick-messages-label">${
            this.translations.quickMessages
          }:</span>
          <div class="kk_wa-quick-messages-buttons">
            ${this.config.quickMessages
              .map((category) =>
                category.messages
                  .map(
                    (msg) =>
                      `<button class="kk_wa-quick-message-btn" data-message="${encodeURIComponent(
                        msg.text
                      )}">${msg.label}</button>`
                  )
                  .join("")
              )
              .join("")}
          </div>
        </div>
      `;
    }

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("kk_wa-member-chat-input-group-container");
    inputContainer.innerHTML = `
      ${quickMessagesHTML}
      <div class="kk_wa-input-row">
        <input 
          type="text" 
          class="kk_wa-member-chat-input-group-form-input"
          placeholder="${this.translations.messagePlaceholder}"
        >
        <button class="kk_wa-member-chat-input-group-form-input-button">
${SVG_ICONS.paperPlane}
        </button>
      </div>
    `;

    const messageInput = inputContainer.querySelector(
      ".kk_wa-member-chat-input-group-form-input"
    ) as HTMLInputElement;
    const sendButton = inputContainer.querySelector(
      ".kk_wa-member-chat-input-group-form-input-button"
    ) as HTMLButtonElement;

    // Quick message button listeners
    const quickMessageBtns = inputContainer.querySelectorAll(
      ".kk_wa-quick-message-btn"
    );
    quickMessageBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const message = decodeURIComponent(
          btn.getAttribute("data-message") || ""
        );
        messageInput.value = message;
      });
    });

    // Send button functionality
    const sendMessage = () => {
      const message = messageInput.value.trim();
      if (message) {
        this.trackEvent("onMessageSent", { member, message });

        const whatsappUrl = `https://wa.me/${
          member.phone
        }?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");

        messageInput.value = "";
        inputGroup.classList.remove("kk_wa-member-chat-input-group-active");
      }
    };

    sendButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      sendMessage();
    });

    messageInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
      }
    });

    inputGroup.appendChild(inputContainer);
    memberContainer.appendChild(inputGroup);
    inputGroup.classList.add("kk_wa-member-chat-input-group-active");

    // Focus on the input
    setTimeout(() => messageInput.focus(), 100);
  }

  private createChatContainer() {
    // Remove existing container
    const existingContainer = this.mountElement.querySelector(
      ".kk_wa-chat-container"
    );
    if (existingContainer) {
      existingContainer.remove();
    }
    const position = this.config.position || "bottom-right";
    const chatContainer = document.createElement("div");
    chatContainer.classList.add(
      "kk_wa-chat-container",
      "kk_wa-chat-container-active",
      `kk_wa-position-${position}`
    );

    // Header
    const header = this.createHeader();
    chatContainer.appendChild(header);

    // Content area
    const content = document.createElement("div");
    content.classList.add("kk_wa-content");
    chatContainer.appendChild(content);

    // // Close button
    // const closeButton = document.createElement("button");
    // closeButton.classList.add("kk_wa-close-button");
    // closeButton.innerHTML = '<i class="fas fa-times"></i>';
    // closeButton.addEventListener("click", () => this.closeWidget());
    // chatContainer.appendChild(closeButton);

    this.mountElement.appendChild(chatContainer);
  }

  private createHeader(): HTMLElement {
    const chatHeader = document.createElement("div");
    chatHeader.classList.add("kk_wa-chat-header");

    const headerContent = document.createElement("div");
    headerContent.classList.add("kk_wa-header-content");

    // Business logo or WhatsApp icon
    const iconElement = this.config.businessInfo?.logo
      ? `<img src="${this.config.businessInfo.logo}" alt="${this.config.businessInfo.name}" class="kk_wa-business-logo">`
      : SVG_ICONS.whatsapp;

    const headerText = document.createElement("div");
    headerText.classList.add("kk_wa-header-text");

    const title =
      this.config.businessInfo?.name || this.translations.headerTitle;
    const description =
      this.config.businessInfo?.tagline ||
      this.config.businessInfo?.description ||
      this.translations.headerDescription;

    headerText.innerHTML = `
      <h2>${title}</h2>
      <p>${description}</p>
    `;

    headerContent.innerHTML = iconElement;
    headerContent.appendChild(headerText);
    chatHeader.appendChild(headerContent);

    return chatHeader;
  }

  private isBusinessHours(): boolean {
    if (!this.config.businessHours?.enabled) return true;

    const now = new Date();
    const dayNames = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const day = dayNames[now.getDay()];
    const schedule = this.config.businessHours.schedule[day];

    if (!schedule) return false;

    const currentTime = now.getHours() * 60 + now.getMinutes();
    const [openHour, openMin] = schedule.open.split(":").map(Number);
    const [closeHour, closeMin] = schedule.close.split(":").map(Number);

    const openTime = openHour * 60 + openMin;
    const closeTime = closeHour * 60 + closeMin;

    return currentTime >= openTime && currentTime <= closeTime;
  }

  private trackEvent(
    eventName: keyof NonNullable<AnalyticsConfig["events"]>,
    data: any
  ) {
    if (!this.config.analytics?.enabled) return;

    const event = this.config.analytics.events?.[eventName];
    if (event) {
      event(data, this.config.analytics.trackingId!);
    }

    // Google Analytics integration
    if (
      this.config.analytics.trackingId &&
      typeof (window as any).gtag !== "undefined"
    ) {
      (window as any).gtag(
        "event",
        eventName,
        this.config.analytics.trackingId,
        {
          custom_map: { data: JSON.stringify(data) },
        }
      );
    }
  }

  // show branding
  private showBranding(mountElement: HTMLElement) {
    console.log("showBranding called", this.config.showBranding);
    console.log("mountElement", mountElement);

    if (!this.config.showBranding) return;

    // Remove any existing branding
    const existingBranding = mountElement.querySelector(".kk_wa-branding");
    if (existingBranding) {
      existingBranding.remove();
    }

    const brandingContainer = document.createElement("div");
    brandingContainer.classList.add("kk_wa-branding");
    brandingContainer.innerHTML = `
      <div class="kk_wa-branding-container">
        <div class="kk_wa-branding-text">
          <a href="https://kreativekorna.com" target="_blank">🚀 Powered by Kreative Korna</a>
        </div>
      </div>
    `;

    console.log("Appending branding to:", mountElement);
    mountElement.appendChild(brandingContainer);
    console.log("Branding appended successfully");
  }
}

function whatsappWidget(widgetMountElId: string, config: WidgetConfig) {
  return new WhatsAppWidget(widgetMountElId, config);
}

declare global {
  interface Window {
    whatsappWidget: typeof whatsappWidget;
  }
}

// Make it available globally
if (typeof window !== "undefined") {
  window.whatsappWidget = whatsappWidget;
}

export default whatsappWidget;
