export const MDXComponents = {
  h1: (props: any) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="text-lg leading-relaxed mb-6" {...props} />,
  a: (props: any) => <a className="text-primary hover:underline" href={props.href} {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  code: (props: any) => <code className="bg-muted px-1 py-0.5 rounded text-sm" {...props} />,
  pre: (props: any) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-6" {...props} />,
};
