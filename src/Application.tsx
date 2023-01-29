import useApplication from "@steroidsjs/core/hooks/useApplication";
import HttpComponent from "@steroidsjs/core/components/HttpComponent";
import LocaleComponent from "@steroidsjs/core/components/LocaleComponent";

import "style/index.scss";

export default function Application() {
  const { renderApplication } = useApplication({
    reducers: require("./reducers/store").default,
    routes: () => require("routes").default,
    layoutView: () => require("shared/Layout").default,
    screen: true,
    components: {
      locale: LocaleComponent,
      http: HttpComponent,
    },
    onInit: ({ ui }) => {
      ui.addViews(require("./ui/bootstrap").default);
      ui.addFields(require("@steroidsjs/core/ui/form").default);
      ui.addFormatters(require("@steroidsjs/core/ui/format").default);
      ui.addIcons(require("./icons").default);
    },
  });

  return renderApplication();
}