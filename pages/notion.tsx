import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { createNotion, fetchNotionPage } from '@libs/client/notion';

export const getStaticProps: GetStaticProps = async () => {
  const notion = createNotion();
  const page = process.env.NOTION_PAGE_ID!;
  const pageData = await fetchNotionPage(notion, page);

  const theme: any = [];
  pageData.results.map((themePage: any) => {
    if (themePage.type === 'child_page') {
      return theme.push({
        id: themePage.id,
        themeName: themePage.child_page.title,
      });
    }
  });

  const studyData: any = [];
  await Promise.all(
    theme.map(async (item: any) => {
      const themeData = await fetchNotionPage(notion, item.id);
      return studyData.push({
        theme: item.themeName,
        data: themeData,
      });
    })
  );

  return {
    props: {
      studyData,
    },
  };
};

const Notion: NextPage = ({
  studyData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <div>Notion</div>
    </>
  );
};

export default Notion;
