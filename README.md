# Remotion Templates by RVE

A collection of free, ready-to-use templates for creating videos using Remotion. These templates are designed to be integrated directly into your existing React applications that use Remotion.

## Live Demos

If you'd like to see these templates in action, check out the [examples here.](https://www.reactvideoeditor.com/remotion-templates).

## Overview

This repository provides templates compatible with Remotion to help you get started quickly with video effects and animations. The templates are simple React components that can be copied into your own project and used like any other Remotion `<Composition />` component. You can then customize them to fit your specific requirements.

> **Note:** These templates are not plug-and-play. You will need to copy the component files into your project, link them with your Remotion setup, and adjust their properties to fit your needs.

## Getting Started

To use a template, follow these steps:

1. **Download or Clone**: Start by cloning this repository or downloading it as a ZIP file.
2. **Explore Templates**: Browse the `@templates` directory to view the available templates.
3. **Copy Files**: Copy the template files (e.g., `DynamicVideoTemplate.jsx`) into your existing Remotion project directory.
4. **Integrate with Remotion**: Import the component and use it in your Remotion `<Composition />` setup.

Example integration:

```tsx
import { DynamicVideoTemplate } from "./templates/DynamicVideoTemplate";

<Composition
  id="DynamicVideo"
  component={DynamicVideoTemplate}
  durationInFrames={240}
  fps={30}
  width={1920}
  height={1080}
/>;
```

## Features

- **Customizable Templates**: Each template is fully editable, allowing you to adapt it to your needs.
- **Simple Integration**: Copy and paste the files into your project, then add them to your `<Composition />` components.
- **Clear Documentation**: Each template includes a usage guide with step-by-step instructions and example parameters.

## Contributing

Contributions are welcome! If you have ideas for new templates or improvements to existing ones, feel free to submit an issue or a pull request.

## License

All templates in this repository are available under the MIT License. You can use them in personal and commercial projects, but attribution is appreciated where applicable.
