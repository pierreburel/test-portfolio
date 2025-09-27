import type { MarkdownLayoutProps } from 'astro'

type Props = Record<string, unknown>

export type LayoutProps<T extends Props> = MarkdownLayoutProps<T> | T

const isMarkdownLayoutProps = <T extends Props>(props: LayoutProps<T>): props is MarkdownLayoutProps<T> =>
  'frontmatter' in props

export const getLayoutProps = <T extends Props>(props: LayoutProps<T>): T =>
  isMarkdownLayoutProps(props) ? props.frontmatter : props
