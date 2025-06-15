[![Release](https://github.com/codellyson/kk-whatsapp-chat/actions/workflows/release.yml/badge.svg?event=release)](https://github.com/codellyson/kk-whatsapp-chat/actions/workflows/release.yml)

# WhatsApp Widget Pro

A comprehensive, enterprise-ready WhatsApp widget for websites that allows visitors to easily connect with your team members through WhatsApp chat. Built with TypeScript and designed for serious business use.

## ✨ Features

- 🚀 **Easy Integration** - Simple JavaScript API with minimal setup
- 💼 **Business Ready** - Departments, business hours, lead capture, analytics
- 💬 **Multi-Member Support** - Display multiple team members with individual WhatsApp contacts
- 🎨 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Lightweight** - Built with vanilla TypeScript, no heavy dependencies
- 🎯 **Fully Customizable** - Style and configure to match your brand
- 📱 **Direct WhatsApp Integration** - Opens WhatsApp directly with pre-filled messages
- 🌍 **Multi-language Support** - Built-in localization system
- 📊 **Analytics Ready** - Track interactions and conversions
- 🔒 **Enterprise Features** - Lead capture, CRM integration, business hours

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd whatsapp-widget

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Basic Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    <link rel="stylesheet" href="path/to/widget-styles.css" />
  </head>
  <body>
    <!-- Widget container -->
    <div id="whatsapp-widget"></div>

    <!-- Include the widget script -->
    <script src="path/to/widget.js"></script>

    <script>
      // Initialize the widget
      window.whatsappWidget("#whatsapp-widget", {
        members: [
          {
            name: "John Doe",
            phone: "+1234567890",
            avatar: "https://example.com/avatar1.jpg",
            title: "Customer Support",
            isOnline: true,
          },
        ],
      });
    </script>
  </body>
</html>
```

## 💼 Business Features

### 1. Department Organization

Organize your team into departments for better customer routing:

```javascript
window.whatsappWidget("#widget", {
  departments: [
    {
      id: "sales",
      name: "Sales Department",
      description: "Product inquiries and pricing",
      icon: "💰",
      members: [
        {
          name: "Alice Johnson",
          phone: "+1234567890",
          avatar: "https://example.com/alice.jpg",
          title: "Sales Manager",
          skills: ["Enterprise Sales", "SaaS"],
        },
      ],
    },
    {
      id: "support",
      name: "Technical Support",
      description: "Technical help and troubleshooting",
      icon: "🛠️",
      members: [
        {
          name: "Bob Smith",
          phone: "+1234567891",
          avatar: "https://example.com/bob.jpg",
          title: "Senior Developer",
          skills: ["JavaScript", "React", "API Integration"],
        },
      ],
    },
  ],
});
```

### 2. Business Hours & Availability

Set operating hours and show offline messages:

```javascript
window.whatsappWidget("#widget", {
  businessHours: {
    enabled: true,
    schedule: {
      mon: { open: "09:00", close: "17:00" },
      tue: { open: "09:00", close: "17:00" },
      wed: { open: "09:00", close: "17:00" },
      thu: { open: "09:00", close: "17:00" },
      fri: { open: "09:00", close: "17:00" },
    },
    offlineMessage:
      "We're currently offline. Leave a message and we'll respond during business hours!",
  },
  members: [
    {
      name: "Support Team",
      phone: "+1234567890",
      avatar: "https://example.com/support.jpg",
      isOnline: true, // Override business hours for specific members
    },
  ],
});
```

### 3. Lead Capture & CRM Integration

Capture lead information before starting conversations:

```javascript
window.whatsappWidget("#widget", {
  leadCapture: {
    enabled: true,
    showBefore: "member-selection", // or "message-send"
    fields: {
      name: { required: true, placeholder: "Your full name" },
      email: {
        required: true,
        placeholder: "your.email@company.com",
        type: "email",
      },
      phone: { required: false, placeholder: "Phone number", type: "tel" },
      company: { required: false, placeholder: "Company name" },
    },
    onLeadCapture: (leadData) => {
      // Send to your CRM
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });
    },
  },
});
```

### 4. Quick Messages & Templates

Provide predefined message templates:

```javascript
window.whatsappWidget("#widget", {
  quickMessages: [
    {
      category: "general",
      messages: [
        {
          label: "Product Demo",
          text: "I'd like to schedule a product demonstration",
        },
        {
          label: "Pricing Info",
          text: "Can you send me detailed pricing information?",
        },
        {
          label: "Technical Support",
          text: "I need help with technical issues",
        },
      ],
    },
  ],
});
```

### 5. Analytics & Tracking

Track user interactions and conversions:

```javascript
window.whatsappWidget("#widget", {
  analytics: {
    enabled: true,
    trackingId: "GA_MEASUREMENT_ID", // Google Analytics
    events: {
      onWidgetOpen: (data) => {
        // Track widget opens
        gtag("event", "widget_open", {
          timestamp: data.timestamp,
        });
      },
      onMemberSelect: (member) => {
        // Track member selections
        gtag("event", "member_select", {
          member_name: member.name,
          member_department: member.department,
        });
      },
      onMessageSent: (data) => {
        // Track message sends
        gtag("event", "message_sent", {
          member_name: data.member.name,
          message_length: data.message.length,
        });
      },
      onLeadCapture: (leadData) => {
        // Track lead captures
        gtag("event", "lead_capture", {
          lead_email: leadData.email,
          lead_company: leadData.company,
        });
      },
    },
  },
});
```

### 6. Multi-language Support

Customize the widget for different languages:

```javascript
window.whatsappWidget("#widget", {
  localization: {
    language: "es",
    translations: {
      headerTitle: "WhatsApp",
      headerDescription:
        "¡Hola! Haz clic en uno de nuestros miembros para chatear por WhatsApp",
      messagePlaceholder: "Escribe tu mensaje aquí...",
      sendButton: "Enviar",
      offlineMessage:
        "Actualmente estamos fuera de línea. Deja un mensaje y te responderemos.",
      backButton: "Volver",
      nameLabel: "Nombre",
      emailLabel: "Correo electrónico",
      phoneLabel: "Teléfono",
      companyLabel: "Empresa",
      submitButton: "Continuar al Chat",
    },
  },
});
```

### 7. Advanced Styling & Theming

Customize the appearance to match your brand:

```javascript
window.whatsappWidget("#widget", {
  position: "bottom-left", // bottom-right, top-left, top-right
  theme: {
    brandColors: {
      primary: "#6C5CE7",
      secondary: "#5A4FCF",
      accent: "#4834D4",
    },
    typography: {
      fontFamily: "Inter, system-ui, sans-serif",
      fontSize: "14px",
    },
  },
  styles: {
    button: {
      backgroundColor: "#6C5CE7",
      color: "#ffffff",
    },
  },
});
```

## ⚙️ Complete Configuration Reference

```typescript
interface WidgetConfig {
  // Core configuration
  members?: Member[];
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  autoOpen?: boolean;
  showBranding?: boolean;

  // Business information
  businessInfo?: {
    name: string;
    tagline?: string;
    logo?: string;
    description?: string;
  };

  // Business hours
  businessHours?: {
    enabled: boolean;
    timezone?: string;
    schedule: {
      [day: string]: { open: string; close: string } | null;
    };
    offlineMessage?: string;
  };

  // Departments
  departments?: {
    id: string;
    name: string;
    description?: string;
    icon?: string;
    members: Member[];
  }[];

  // Lead capture
  leadCapture?: {
    enabled: boolean;
    showBefore?: "member-selection" | "message-send";
    fields: {
      name?: { required: boolean; placeholder: string; type?: string };
      email?: { required: boolean; placeholder: string; type?: string };
      phone?: { required: boolean; placeholder: string; type?: string };
      company?: { required: boolean; placeholder: string; type?: string };
    };
    onLeadCapture?: (leadData: any) => void;
  };

  // Quick messages
  quickMessages?: {
    category: string;
    messages: { label: string; text: string }[];
  }[];

  // Analytics
  analytics?: {
    enabled: boolean;
    trackingId?: string;
    events?: {
      onWidgetOpen?: (data: any) => void;
      onMemberSelect?: (member: Member) => void;
      onMessageSent?: (data: any) => void;
      onLeadCapture?: (leadData: any) => void;
      onWidgetClose?: () => void;
    };
  };

  // Localization
  localization?: {
    language: string;
    translations: { [key: string]: string };
  };

  // Theming
  theme?: {
    brandColors?: {
      primary: string;
      secondary: string;
      accent: string;
    };
    typography?: {
      fontFamily: string;
      fontSize: string;
    };
  };
}

interface Member {
  id?: string;
  name: string;
  phone: string;
  avatar: string;
  title?: string;
  department?: string;
  skills?: string[];
  isOnline?: boolean;
}
```

## 🔗 Integration Examples

### WordPress Integration

```php
// functions.php
function add_whatsapp_widget() {
    wp_enqueue_script('whatsapp-widget', 'path/to/widget.js', [], '1.0.0', true);
    wp_enqueue_style('whatsapp-widget', 'path/to/widget.css', [], '1.0.0');
}
add_action('wp_enqueue_scripts', 'add_whatsapp_widget');

// In your template
echo '<div id="whatsapp-widget"></div>';
echo '<script>
window.whatsappWidget("#whatsapp-widget", ' . json_encode($widget_config) . ');
</script>';
```

### React Integration

```jsx
import { useEffect } from "react";

function WhatsAppWidget({ config }) {
  useEffect(() => {
    if (window.whatsappWidget) {
      window.whatsappWidget("#whatsapp-widget", config);
    }
  }, [config]);

  return <div id="whatsapp-widget"></div>;
}
```

### Shopify Integration

```liquid
<!-- In your theme.liquid -->
<div id="whatsapp-widget"></div>
<script src="{{ 'whatsapp-widget.js' | asset_url }}"></script>
<script>
  window.whatsappWidget("#whatsapp-widget", {
    businessInfo: {
      name: "{{ shop.name }}",
      logo: "{{ shop.logo | img_url: '100x100' }}"
    },
    members: [
      {
        name: "Customer Support",
        phone: "{{ settings.whatsapp_phone }}",
        avatar: "{{ 'support-avatar.jpg' | asset_url }}"
      }
    ]
  });
</script>
```

## 🎨 CSS Customization

### Available CSS Variables

```css
:root {
  --kk_wa-primary-color: #25d366;
  --kk_wa-secondary-color: #128c7e;
  --kk_wa-accent-color: #075e54;
  --kk_wa-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  --kk_wa-border-radius-sm: 8px;
  --kk_wa-border-radius-md: 12px;
  --kk_wa-container-width: 350px;
}
```

### CSS Classes for Styling

- `.kk_wa-button` - Main WhatsApp button
- `.kk_wa-chat-container` - Chat popup container
- `.kk_wa-chat-header` - Header section
- `.kk_wa-department-card` - Department selection cards
- `.kk_wa-member-card` - Individual member cards
- `.kk_wa-lead-form` - Lead capture form
- `.kk_wa-quick-message-btn` - Quick message buttons
- `.kk_wa-online-indicator` - Online status indicator

## 📊 Analytics Integration

### Google Analytics 4

```javascript
// Initialize GA4
gtag("config", "GA_MEASUREMENT_ID");

// Configure widget with GA4 tracking
window.whatsappWidget("#widget", {
  analytics: {
    enabled: true,
    trackingId: "GA_MEASUREMENT_ID",
    events: {
      onWidgetOpen: (data) => {
        gtag("event", "widget_interaction", {
          action: "open",
          timestamp: data.timestamp,
        });
      },
      onLeadCapture: (leadData) => {
        gtag("event", "generate_lead", {
          currency: "USD",
          value: 100.0, // Estimated lead value
        });
      },
    },
  },
});
```

### Custom Analytics

```javascript
window.whatsappWidget("#widget", {
  analytics: {
    enabled: true,
    events: {
      onWidgetOpen: (data) => {
        // Send to your analytics service
        fetch("/api/analytics/widget-open", {
          method: "POST",
          body: JSON.stringify(data),
        });
      },
      onMessageSent: (data) => {
        // Track conversions
        fetch("/api/analytics/message-sent", {
          method: "POST",
          body: JSON.stringify({
            member: data.member.name,
            department: data.member.department,
            message_length: data.message.length,
            timestamp: new Date().toISOString(),
          }),
        });
      },
    },
  },
});
```

## 🔧 API Reference

### `whatsappWidget(selector, config)`

Initializes the WhatsApp widget on the specified element.

**Parameters:**

- `selector` (string): CSS selector for the container element
- `config` (WidgetConfig): Configuration object

**Returns:** WhatsAppWidget instance

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 Requirements

- Font Awesome 6.0+ (for icons)
- Modern browser with ES2020 support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support & Documentation

- [Live Demo](https://your-demo-site.com)
- [API Documentation](https://docs.your-site.com)
- [Integration Examples](https://github.com/your-repo/examples)
- [Issue Tracker](https://github.com/your-repo/issues)

## 🙏 Acknowledgments

- Font Awesome for the beautiful icons
- Vite for the excellent build tool
- TypeScript for type safety
- The open-source community for inspiration and contributions
