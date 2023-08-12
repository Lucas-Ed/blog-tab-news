import { Text } from'@thonlabs/ui';

export default function MainFooter() {
  const linkClassName =
    'text-gray-500 hover:text-gray-800 transition-all duration-200ms ease-in-out';

  return (
    <footer className="flex flex-col lg:flex-row justify-between lg:items-center gap-2 lg:gap-0 pt-4 border-t border-solid border-t-gray-200 mt-12 pb-4">
      <div className="flex flex-col">
        <Text className="text-gray-800 italic font-bold">Lucas Edu</Text>
        <Text variant="xs" className="text-gray-500">
        lucas-araras@outlook.com
        </Text>
      </div>
      <ul className="flex gap-2.5">
      <li>
          <a
            href="https://portfolio-lucased.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="xs" className={linkClassName}>
              Portfólio
            </Text>
          </a>
        </li>
        <li>
          <a
            href="https://bit.ly/3DS2f1C"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="xs" className={linkClassName}>
              Nostr
            </Text>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lucas-eduardo-rosolem-aa535697/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="xs" className={linkClassName}>
              LinkedIn
            </Text>
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/lucas.eduardo007/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="xs" className={linkClassName}>
              Instagram
            </Text>
          </a>
        </li>
      </ul>
    </footer>
  );
}
