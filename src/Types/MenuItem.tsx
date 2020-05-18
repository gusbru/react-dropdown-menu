export interface MenuItem {
  itemText: string;
  leftIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | undefined;
  rightIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | undefined;
}
