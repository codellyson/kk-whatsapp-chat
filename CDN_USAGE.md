# WhatsApp Widget CDN Usage

## Quick Start

### Via jsDelivr (GitHub)

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/yourusername/whatsapp-widget@latest/dist/whatsapp-widget.css"
    />
  </head>
  <body>
    <!-- Mount point -->
    <div id="whatsapp-widget"></div>

    <!-- JavaScript -->
    <script src="https://cdn.jsdelivr.net/gh/yourusername/whatsapp-widget@latest/dist/whatsapp-widget.iife.js"></script>

    <!-- Initialize -->
    <script>
      whatsappWidget("#whatsapp-widget", {
        members: [
          {
            name: "Support Team",
            phone: "1234567890",
            avatar: "https://via.placeholder.com/50",
            title: "Customer Support",
          },
        ],
      });
    </script>
  </body>
</html>
```

### Via unpkg (npm)

```html
<!-- CSS -->
<link
  rel="stylesheet"
  href="https://unpkg.com/whatsapp-widget@latest/dist/whatsapp-widget.css"
/>

<!-- JavaScript -->
<script src="https://unpkg.com/whatsapp-widget@latest/dist/whatsapp-widget.iife.js"></script>
```

## Available Build Formats

1. **IIFE** (`whatsapp-widget.iife.js`) - For direct browser usage
2. **UMD** (`whatsapp-widget.umd.js`) - Universal module definition
3. **ES Module** (`whatsapp-widget.es.js`) - For modern bundlers

## Configuration Options

```javascript
whatsappWidget("#whatsapp-widget", {
  members: [
    {
      name: "John Doe",
      phone: "1234567890", // Without country code formatting
      avatar: "https://example.com/avatar.jpg",
      title: "Customer Support",
      skills: ["Sales", "Support"],
      isOnline: true,
    },
  ],
  businessInfo: {
    name: "Your Company",
    tagline: "We're here to help!",
    logo: "https://example.com/logo.png",
    description: "Contact our team for support",
  },
  departments: [
    {
      id: "sales",
      name: "Sales",
      description: "Product inquiries and purchases",
      icon: "💼",
      members: [
        /* array of members */
      ],
    },
  ],
  position: "bottom-right", // or 'bottom-left'
  theme: {
    brandColors: {
      primary: "#25d366",
      secondary: "#128c7e",
      accent: "#075e54",
    },
    typography: {
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
    },
  },
  quickMessages: [
    {
      category: "General",
      messages: [
        { label: "Hello", text: "Hello! I need help with..." },
        { label: "Pricing", text: "Can you tell me about your pricing?" },
      ],
    },
  ],
  leadCapture: {
    enabled: true,
    showBefore: "member-selection",
    fields: {
      name: { required: true, placeholder: "Your Name" },
      email: { required: true, placeholder: "your@email.com" },
      phone: { required: false, placeholder: "Your Phone" },
      company: { required: false, placeholder: "Company Name" },
    },
    onLeadCapture: (leadData) => {
      console.log("Lead captured:", leadData);
      // Send to your API
    },
  },
  businessHours: {
    enabled: true,
    timezone: "America/New_York",
    schedule: {
      mon: { open: "09:00", close: "17:00" },
      tue: { open: "09:00", close: "17:00" },
      wed: { open: "09:00", close: "17:00" },
      thu: { open: "09:00", close: "17:00" },
      fri: { open: "09:00", close: "17:00" },
      sat: null, // Closed
      sun: null, // Closed
    },
    offlineMessage: "We are currently offline. Please leave a message!",
  },
  analytics: {
    enabled: true,
    trackingId: "your-tracking-id",
    events: {
      onWidgetOpen: (data) => console.log("Widget opened", data),
      onMemberSelect: (member) => console.log("Member selected", member),
      onMessageSent: (member, message) =>
        console.log("Message sent", member, message),
      onLeadCapture: (leadData) => console.log("Lead captured", leadData),
    },
  },
});
```

## CDN Providers

### 1. jsDelivr (Recommended)

- **Free**: ✅
- **Fast**: ✅ (Global CDN)
- **Setup**: Push to GitHub, automatic
- **URL**: `https://cdn.jsdelivr.net/gh/username/repo@version/file`

### 2. unpkg

- **Free**: ✅
- **Fast**: ✅
- **Setup**: Publish to npm
- **URL**: `https://unpkg.com/package@version/file`

### 3. Netlify

- **Free tier**: ✅
- **Custom domain**: ✅
- **Setup**: Deploy dist folder
- **URL**: `https://your-app.netlify.app/file`

### 4. GitHub Pages

- **Free**: ✅
- **Setup**: Push to gh-pages branch
- **URL**: `https://username.github.io/repo/file`

## File Sizes

- CSS: ~11.7 KB (2.1 KB gzipped)
- JavaScript (IIFE): ~14.4 KB (4.8 KB gzipped)
- JavaScript (ES): ~16.9 KB (5.1 KB gzipped)

## Browser Support

- Modern browsers (ES2020+)
- Chrome 80+
- Firefox 72+
- Safari 13+
- Edge 80+

## License

MIT License - Use freely in commercial and personal projects.
