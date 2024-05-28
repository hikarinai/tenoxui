/*!
 * TenoxUI CSS v0.10.0
 * Licensed under MIT (https://github.com/tenoxui/css/blob/main/LICENSE)
 */
type Property = {
  [key: string]: string | string[];
};
type Breakpoint = {
  name: string;
  min?: number;
  max?: number;
}[];
type Classes = String[];
type AllClasses = NodeListOf<HTMLElement>;
type StylesRegistry = Record<string, string[]>;
declare let allProps: Property,
  breakpoints: Breakpoint,
  classes: Classes,
  allClasses: AllClasses,
  styleRegistry: StylesRegistry;
declare class makeTenoxUI {
  private element;
  private styles;
  constructor(element: HTMLElement, styledProps?: Property);
  private camelToKebab;
  addStyle(type: string, value: string, unit: string): void;
  private handleResponsive;
  private pseudoStyles;
  applyStyles(className: string): void;
  applyMultiStyles(styles: string): void;
}
interface TypeObjects {
  [key: string]: string | TypeObjects;
}
type Styles = TypeObjects | Record<string, TypeObjects[]>;
declare function makeStyles(...stylesObjects: Styles[]): Styles;
declare function use(customConfig: { breakpoint?: Breakpoint; property?: Property[] }): void;
declare function tenoxui(...customPropsArray: Property[]): void;
