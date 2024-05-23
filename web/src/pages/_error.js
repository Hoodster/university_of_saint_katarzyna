import PageBase from "./_pagebase";

export default function ErrorPage(code) {
	return <PageBase contentKey={'error'} data-errorCode={code} />
}