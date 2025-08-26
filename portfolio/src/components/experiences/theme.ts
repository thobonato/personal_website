export type ThemeMode = 'dark' | 'light';

interface CardColors {
  background: string;
  text: string;
  subtext: string;
  hover: string;
  border?: string;
}

interface ThemeConfig {
  background: string;
  text: string;
  cards: {
    primary: CardColors;
    secondary: CardColors[];
  };
}

export const themes: Record<ThemeMode, ThemeConfig> = {
  light: {
    background: 'bg-white',
    text: 'text-black',
    cards: {
      primary: {
        background: 'bg-blue-50',
        text: 'text-gray-900',
        subtext: 'text-gray-600',
        hover: 'hover:bg-blue-100',
      },
      secondary: [
        {
          background: 'bg-green-50',
          text: 'text-gray-900',
          subtext: 'text-gray-600',
          hover: 'hover:bg-green-100',
        },
        {
          background: 'bg-purple-50',
          text: 'text-gray-900',
          subtext: 'text-gray-600',
          hover: 'hover:bg-purple-100',
        },
        {
          background: 'bg-yellow-50',
          text: 'text-gray-900',
          subtext: 'text-gray-600',
          hover: 'hover:bg-yellow-100',
        },
        {
          background: 'bg-pink-50',
          text: 'text-gray-900',
          subtext: 'text-gray-600',
          hover: 'hover:bg-pink-100',
        },
        {
          background: 'bg-orange-50',
          text: 'text-gray-900',
          subtext: 'text-gray-600',
          hover: 'hover:bg-orange-100',
        },
      ],
    },
  },
  dark: {
    background: 'bg-black',
    text: 'text-white',
    cards: {
      primary: {
        background: 'bg-zinc-900',
        text: 'text-gray-100',
        subtext: 'text-gray-400',
        hover: 'hover:bg-zinc-800',
        border: 'border border-zinc-800',
      },
      secondary: [
        {
          background: 'bg-zinc-900',
          text: 'text-gray-100',
          subtext: 'text-gray-400',
          hover: 'hover:bg-zinc-800',
          border: 'border border-zinc-800',
        },
        {
          background: 'bg-zinc-900',
          text: 'text-gray-100',
          subtext: 'text-gray-400',
          hover: 'hover:bg-zinc-800',
          border: 'border border-zinc-800',
        },
        {
          background: 'bg-zinc-900',
          text: 'text-gray-100',
          subtext: 'text-gray-400',
          hover: 'hover:bg-zinc-800',
          border: 'border border-zinc-800',
        },
        {
          background: 'bg-zinc-900',
          text: 'text-gray-100',
          subtext: 'text-gray-400',
          hover: 'hover:bg-zinc-800',
          border: 'border border-zinc-800',
        },
        {
          background: 'bg-zinc-900',
          text: 'text-gray-100',
          subtext: 'text-gray-400',
          hover: 'hover:bg-zinc-800',
          border: 'border border-zinc-800',
        },
      ],
    },
  },
}; 