tag = latest
export tag

build:
	docker build -t debtcollective/disputes-api:$(tag) .

push:
	docker push debtcollective/disputes-api:$(tag)
