# WhatsApp Widget

A lightweight, customizable WhatsApp widget for websites that allows visitors to easily connect with your team members through WhatsApp chat.

## ✨ Features

- 🚀 **Easy Integration** - Simple JavaScript API with minimal setup
- 💬 **Multi-Member Support** - Display multiple team members with individual WhatsApp contacts
- 🎨 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Lightweight** - Built with vanilla TypeScript, no heavy dependencies
- 🎯 **Customizable** - Style and configure to match your brand
- 📱 **Direct WhatsApp Integration** - Opens WhatsApp directly with pre-filled messages

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

1. **Include the widget in your HTML:**

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
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
          },
          {
            name: "Jane Smith",
            phone: "+0987654321",
            avatar: "https://example.com/avatar2.jpg",
          },
        ],
      });
    </script>
  </body>
</html>
```

## ⚙️ Configuration

### Widget Configuration Options

```typescript
interface WidgetConfig {
  styles?: {
    button?: {
      backgroundColor?: string;
      color?: string;
    };
  };
  members: {
    name: string; // Team member's display name
    phone: string; // WhatsApp phone number with country code
    avatar: string; // URL to member's profile image
  }[];
}
```

### Example Configuration

```javascript
window.whatsappWidget("#my-widget", {
  styles: {
    button: {
      backgroundColor: "#25D366",
      color: "#ffffff",
    },
  },
  members: [
    {
      name: "Customer Support",
      phone: "+1234567890",
      avatar: "https://example.com/support-avatar.jpg",
    },
    {
      name: "Sales Team",
      phone: "+1234567891",
      avatar: "https://example.com/sales-avatar.jpg",
    },
    {
      name: "Technical Support",
      phone: "+1234567892",
      avatar: "https://example.com/tech-avatar.jpg",
    },
  ],
});
```

## 🎨 Customization

### CSS Classes

The widget uses CSS classes with the `kk_wa-` prefix that you can customize:

- `.kk_wa-button` - Main WhatsApp button
- `.kk_wa-chat-container` - Chat popup container
- `.kk_wa-chat-header` - Header section of the chat popup
- `.kk_wa-member-card` - Individual member card
- `.kk_wa-member-avatar` - Member avatar container
- `.kk_wa-member-info` - Member information section

### Custom Styling Example

```css
.kk_wa-button {
  background-color: #128c7e !important;
  border-radius: 50px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

.kk_wa-chat-container {
  border-radius: 12px !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
}
```

## 📱 How It Works

1. **Widget Button**: A floating WhatsApp button appears on your website
2. **Member List**: Clicking the button opens a popup showing your team members
3. **Message Input**: Users can click on any member to open a message input field
4. **WhatsApp Redirect**: Typing a message and clicking send opens WhatsApp with the pre-filled message

## 🛠️ Development

### Project Structure

```
whatsapp-widget/
├── src/
│   ├── main.ts          # Main widget logic
│   ├── style.css        # Widget styles
│   └── vite-env.d.ts    # Vite types
├── public/
│   └── vite.svg         # Static assets
├── index.html           # Demo page
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Building for Production

```bash
pnpm build
```

This will create optimized files in the `dist/` directory that you can include in your website.

## 🔧 API Reference

### `whatsappWidget(selector, config)`

Initializes the WhatsApp widget on the specified element.

**Parameters:**

- `selector` (string): CSS selector for the container element
- `config` (WidgetConfig): Configuration object

**Returns:** void

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

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

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [documentation](#documentation)
2. Search existing [issues](link-to-issues)
3. Create a new [issue](link-to-new-issue) with details

## 🙏 Acknowledgments

- Font Awesome for the beautiful icons
- Vite for the excellent build tool
- TypeScript for type safety
