export function Social({ children, link }) {
  return (
    <li>
      <a href={link} target="blank">
        {children}
      </a>
    </li>
  );
}
