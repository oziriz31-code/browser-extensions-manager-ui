import Filters from "./Filters.tsx";
import ExtensionCard from "./ExtensionCard.tsx";
import type ExtensionType from "../types.ts";
import type { FilterType } from "../types.ts";
import {
  consoleplusIcons,
  devlensIcons,
  domsnapshotIcons,
  gridguidesIcons,
  jsonwizardIcons,
  linkcheckerIcons,
  markupnotesIcons,
  palettepickerIcons,
  speedboostIcons,
  stylespyIcons,
  tabmasterproIcons,
  viewportbuddyIcons
} from "../icons.ts";
import {useState} from "react";

const initialExtensions: ExtensionType[] = [
  {
    id: 'devlens',
    name: 'DevLens',
    description: 'Quickly inspect page layouts and visualize element boundaries.',
    icon: {
      light: devlensIcons.light,
      dark: devlensIcons.dark
    },
    isActive: true,
  },
  {
    id: 'jsonwizard',
    name: 'JSONWizard',
    description: 'Formats, validates, and prettifies JSON responses in-browser.',
    icon: {
      light: jsonwizardIcons.light,
      dark: jsonwizardIcons.dark
    },
    isActive: false,
  },
  {
    id: 'markup-notes',
    name: 'Markup Notes',
    description: 'Enables annotation and notes directly onto webpages for collaborative debugging.',
    icon: {
      light: markupnotesIcons.light,
      dark: markupnotesIcons.dark
    },
    isActive: false,
  },
  {
    id: 'linkchecker',
    name: 'LinkChecker',
    description: 'Scans and highlights broken links on any page.',
    icon: {
      light: linkcheckerIcons.light,
      dark: linkcheckerIcons.dark
    },
    isActive: false,
  },
  {
    id: 'stylespy',
    name: 'StyleSpy',
    description: 'Instantly analyze and copy CSS from any webpage element.',
    icon: {
      light: stylespyIcons.light,
      dark: stylespyIcons.dark
    },
    isActive: false,
  },
  {
    id: 'tabmaster-pro',
    name: 'TabMaster Pro',
    description: 'Organizes browser tabs into groups and sessions.',
    icon: {
      light: tabmasterproIcons.light,
      dark: tabmasterproIcons.dark
    },
    isActive: false,
  },
  {
    id: 'gridguides',
    name: 'GridGuides',
    description: 'Overlay customizable grids and alignment guides on any webpage.',
    icon: {
      light: gridguidesIcons.light,
      dark: gridguidesIcons.dark
    },
    isActive: false,
  },
  {
    id: 'dom-snapshot',
    name: 'DOM Snapshot',
    description: 'Capture and export DOM structures quickly.',
    icon: {
      light: domsnapshotIcons.light,
      dark: domsnapshotIcons.dark
    },
    isActive: false,
  },
  {
    id: 'speedboost',
    name: 'SpeedBoost',
    description: 'Optimizes browser resource usage to accelerate page loading.',
    icon: {
      light: speedboostIcons.light,
      dark: speedboostIcons.dark
    },
    isActive: false,
  },
  {
    id: 'viewportbuddy',
    name: 'ViewportBuddy',
    description: 'Simulates various screen resolutions directly within the browser.',
    icon: {
      light: viewportbuddyIcons.light,
      dark: viewportbuddyIcons.dark
    },
    isActive: false,
  },
  {
    id: 'palette-picker',
    name: 'Palette Picker',
    description: 'Instantly extracts color palettes from any webpage.',
    icon: {
      light: palettepickerIcons.light,
      dark: palettepickerIcons.dark
    },
    isActive: false,
  },
  {
    id: 'consoleplus',
    name: 'ConsolePlus',
    description: 'Enhanced developer console with advanced filtering and logging.',
    icon: {
      light: consoleplusIcons.light,
      dark: consoleplusIcons.dark
    },
    isActive: false,
  }
];

function ExtensionTable() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [extensions, setExtensions] = useState<ExtensionType[]>(initialExtensions);

  const handleFilterChange = (state: FilterType) => {
    setActiveFilter(state);
  };

  const toggleExtension = (id: string) => {
    setExtensions(prevExtensions =>
      prevExtensions.map(extension =>
        extension.id === id
          ? {...extension, isActive: !extension.isActive}
          : extension
      )
    );
  };

  const removeExtension = (id: string) => {
    setExtensions(prevExtensions =>
      prevExtensions.filter(extension => extension.id !== id)
    );
  };

  const filteredExtensions = activeFilter === 'All'
    ? extensions
    : extensions.filter(extension =>
      activeFilter === 'Active' ? extension.isActive : !extension.isActive
    );

  return (
    <div className="grid grid-cols-1 gap-10">
      <Filters
        value={activeFilter}
        onChange={handleFilterChange}
      />
      <section className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-3">
        {filteredExtensions.map((extension) => (
          <ExtensionCard
            key={extension.id}
            extension={extension}
            onToggle={() => toggleExtension(extension.id)}
            onRemove={() => removeExtension(extension.id)}
          />
        ))}
      </section>
    </div>
  );
}

export default ExtensionTable;
