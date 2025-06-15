interface WidgetConfig {
  styles: {
    button: {
      backgroundColor: string;
      color: string;
    };
  };
  members: {
    name: string;
    phone: string;
    avatar: string;
  }[];
}

function whatsappWidget(widgetMountElId: string, config: WidgetConfig) {
  const mountElement = document.querySelector(widgetMountElId);
  console.log("widgetMountEl", mountElement);
  if (!mountElement) {
    return;
  }

  // create button
  const chatButton = document.createElement("button");
  chatButton.classList.add("kk_wa-button");
  chatButton.innerHTML = `<i class="fab fa-whatsapp"></i>`;
  mountElement.appendChild(chatButton);

  chatButton.addEventListener("click", () => {
    createOrToggleChatContainer();
  });

  function createChatInputGroup(
    memberContainer: HTMLElement,
    member: {
      name: string;
      phone: string;
      avatar: string;
    }
  ) {
    const existingInputGroup = memberContainer.querySelector(
      ".kk_wa-member-chat-input-group"
    );

    // If input group exists, just toggle its visibility
    if (existingInputGroup) {
      existingInputGroup.classList.toggle(
        "kk_wa-member-chat-input-group-active"
      );
      return;
    }

    const inputGroup = document.createElement("div");
    // note: this is a small chat input group, it will be used  include message(complaint, suggestion, etc) to the member
    inputGroup.classList.add("kk_wa-member-chat-input-group");

    // create elements for the input group
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("kk_wa-member-chat-input-group-container");

    const messageInput = document.createElement("input");
    messageInput.classList.add("kk_wa-member-chat-input-group-form-input");
    messageInput.placeholder = "Type your message here...";

    inputContainer.appendChild(messageInput);

    const sendButton = document.createElement("button");
    sendButton.classList.add("kk_wa-member-chat-input-group-form-input-button");
    sendButton.innerHTML = `<i class="fas fa-paper-plane"></i>`;

    // on click, send the message
    sendButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const message = messageInput.value;
      if (message.trim()) {
        // Create WhatsApp URL with the message
        const whatsappUrl = `https://wa.me/${
          member.phone
        }?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
      }
      // clear the input
      messageInput.value = "";
      //toggle the input group
      inputGroup.classList.toggle("kk_wa-member-chat-input-group-active");
    });
    inputContainer.appendChild(sendButton);

    const inputIcon = document.createElement("i");
    inputIcon.classList.add("fab", "fa-whatsapp");
    inputGroup.appendChild(inputContainer);

    memberContainer.appendChild(inputGroup);
    // Show the input group when first created
    inputGroup.classList.add("kk_wa-member-chat-input-group-active");
  }

  function createMemberCard(
    parentElement: HTMLElement,
    member: {
      name: string;
      phone: string;
      avatar: string;
    }
  ) {
    const memberContainer = document.createElement("div");
    memberContainer.classList.add("kk_wa-member-container");
    parentElement.appendChild(memberContainer);

    const memberCard = document.createElement("div");
    memberCard.onclick = (e) => {
      e.stopPropagation();
      // slide down the input group

      createChatInputGroup(memberContainer as HTMLElement, member);
    };

    memberCard.classList.add("kk_wa-member-card");
    memberContainer.appendChild(memberCard);

    const avatarContainer = document.createElement("div");
    avatarContainer.classList.add("kk_wa-member-avatar");
    memberCard.appendChild(avatarContainer);

    const avatarImg = document.createElement("img");
    avatarImg.classList.add("kk_wa-member-avatar-img");
    avatarImg.src = member.avatar;
    avatarImg.alt = member.name;
    avatarContainer.appendChild(avatarImg);

    const memberInfo = document.createElement("div");
    memberInfo.classList.add("kk_wa-member-info");
    memberCard.appendChild(memberInfo);

    const memberName = document.createElement("h3");
    memberName.textContent = member.name;
    memberInfo.appendChild(memberName);

    const memberPhone = document.createElement("p");
    memberPhone.textContent = member.phone;
    memberInfo.appendChild(memberPhone);

    const memberAction = document.createElement("div");
    memberAction.classList.add("kk_wa-member-action");
    memberCard.appendChild(memberAction);

    const actionIcon = document.createElement("i");
    actionIcon.classList.add("fab", "fa-whatsapp");
    memberAction.appendChild(actionIcon);
  }

  function createOrToggleChatContainer() {
    if (!mountElement) {
      return;
    }

    const existingContainer = document.querySelector(".kk_wa-chat-container");
    if (existingContainer) {
      existingContainer.classList.toggle("kk_wa-chat-container-active");
      return;
    }

    // create container
    const chatContainer = document.createElement("div");
    chatContainer.classList.add("kk_wa-chat-container");
    mountElement.appendChild(chatContainer);

    const chatHeader = document.createElement("div");
    chatHeader.classList.add("kk_wa-chat-header");
    chatContainer.appendChild(chatHeader);

    const headerContent = document.createElement("div");
    headerContent.classList.add("kk_wa-header-content");
    chatHeader.appendChild(headerContent);

    const headerIcon = document.createElement("i");
    headerIcon.classList.add("fab", "fa-whatsapp");
    headerContent.appendChild(headerIcon);

    const headerText = document.createElement("div");
    headerText.classList.add("kk_wa-header-text");
    headerContent.appendChild(headerText);

    const headerTitle = document.createElement("h2");
    headerTitle.textContent = "WhatsApp";
    headerText.appendChild(headerTitle);

    const headerDescription = document.createElement("p");
    headerDescription.textContent =
      "Hi! Click one of our member below to chat on WhatsApp";
    headerText.appendChild(headerDescription);

    const membersList = document.createElement("div");
    membersList.classList.add("kk_wa-members-list");
    chatContainer.appendChild(membersList);

    config.members.forEach((member) => {
      createMemberCard(membersList, member);
    });
  }
}

// Expose to window for global access
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
