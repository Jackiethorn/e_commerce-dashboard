type BaseConfig = {
  title: string;
  render: (item: any) => JSX.Element | string | null | undefined;
};

export type HomepageConfig = BaseConfig;
