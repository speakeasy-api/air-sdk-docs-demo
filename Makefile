builddocs:
	speakeasy docs generate --schema openapi.yaml --out ./ --langs go,typescript,python,csharp,curl --compile