import {metadata, metadataOf} from "react-soa/dist/metadata";

export function piped(target: any, key: string) {
	const {piped = []} = metadataOf(target);
	metadata(target, {
		piped: [
			...piped,
			{key},
		]
	});
}