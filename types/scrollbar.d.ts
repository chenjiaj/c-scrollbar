import { App } from 'vue';
import { CComponent } from './component.d';

export interface ScrollbarProps {
  width?: string;

  height?: string;

  trigger?: string;

  direction?: string;

  vBarStyle?: Record<string, any>;

  hBarStyle?: Record<string, any>;

  vThumbStyle?: Record<string, any>;

  hThumbStyle?: Record<string, any>;
}

export declare class CScrollbar extends CComponent {
  $props: ScrollbarProps;
}

export function install(app: App): void;
