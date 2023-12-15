import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

interface BlogDirectNavButtonProps {
  target: string;
  href: string;
  children: React.ReactNode;
}

const BlogDirectNavButton = ({ target, href, children }: BlogDirectNavButtonProps) => (
  <StyledLink target={target} href={href}>
    {children}
  </StyledLink>
);

const StyledLink = styled(Link)`
  margin-bottom: 0.8rem;
`;

export default BlogDirectNavButton;
