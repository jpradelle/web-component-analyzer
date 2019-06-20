import test from "ava";
import { SimpleType, SimpleTypeKind } from "ts-simple-type";
import { parseJsDocTypeString } from "../../../src/analyze/util/js-doc-util";

test("Parse required and union", t => {
	const type = parseJsDocTypeString("!Array|undefined");

	t.deepEqual(type, {
		kind: SimpleTypeKind.UNION,
		types: [{ kind: "ARRAY", type: { kind: SimpleTypeKind.ANY } }, { kind: SimpleTypeKind.UNDEFINED }]
	} as SimpleType);
});
