import Link from 'next/link';
import styled from 'styled-components';

interface BlogDirectNavButtonProps {
  target: string;
  href: string;
  children: React.ReactNode;
  disabled: boolean;
}

const BlogDirectNavButton = ({ target, href, children, disabled }: BlogDirectNavButtonProps) => (
  <StyledLink
    target={target}
    href={href}
    $disabled={disabled}
    onClick={(e) => {
      if (disabled) e.preventDefault();
    }}>
    {children}
  </StyledLink>
);

const StyledLink = styled(Link)<{ $disabled: boolean }>`
  margin-bottom: 0.8rem;
  color: ${({ theme, $disabled }) => ($disabled ? 'rgba(16, 16, 16, 0.3)' : theme.colors.grey_1000)};
`;

export default BlogDirectNavButton;
