import "./NavigationButtonOptions.css";

export default function NavigationButtonOptions(props) {
  const { links } = props;

  console.log(links);

  return (
    <ul className="navigation-button-options">
      <li>
        <a>Front-end</a>
      </li>
      <li>
        <a>Back-end</a>
      </li>
    </ul>
  )
};