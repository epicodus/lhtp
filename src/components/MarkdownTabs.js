// Use in markdown files as follows:
//
// <MarkdownTabs defaultValue="tab1" values={[{label: 'Tab 1', value: 'tab1'}, {label: 'Tab 2', value: 'tab2'}]}>
// <MarkdownTabItem value="tab1">
// This is the content of Tab 1.
// </MarkdownTabItem>
// <MarkdownTabItem value="tab2">
// This is the content of Tab 2.
// </MarkdownTabItem>
// </MarkdownTabs>
//
// IMPORTANT NOTES: 
//
// Must include blank lines before and after the tab content!
// Indentation is picky! 4 spaces of intentation are automatically treated as a code block!
//
// default tab (defaultValue) is first tab
// default label is the value passed to the TabItem

import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {MDXProvider} from '@mdx-js/react';

const MarkdownTabs = ({defaultValue, values, children}) => (
  <MDXProvider>
    <Tabs defaultValue={defaultValue} values={values}>
      {children}
    </Tabs>
  </MDXProvider>
);

const MarkdownTabItem = ({children, ...props}) => (
  <MDXProvider>
    <TabItem {...props}>{children}</TabItem>
  </MDXProvider>
);

export {MarkdownTabs, MarkdownTabItem};
