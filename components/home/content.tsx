import Link from 'next/link';

interface ContentProps {
  contents: { title: string; content: string; link: boolean }[];
}

const Content = ({ contents }: ContentProps) => {
  return (
    <div className="space-y-4 text-left px-2">
      {contents.map((content, i) => (
        <div key={i} className="space-y-2">
          {content.link ? (
            <>
              <h3 className="text-slate-500 text-2xl font-semibold">Address</h3>
              <p>
                <Link href={`https://${content.content}`} passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 text-lg font-semibold"
                  >
                    {content.content}
                  </a>
                </Link>
              </p>
            </>
          ) : (
            <>
              <h3 className="text-slate-500 text-2xl font-semibold">
                {content.title}
              </h3>
              <p className="text-slate-700 text-lg font-semibold">
                {content.content}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Content;
