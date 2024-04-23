## Rules ##
run:
	yarn start
	
run-db:
	docker run -p 8000:8000 amazon/dynamodb-local

stop-db:
	docker ps -q --filter ancestor=amazon/dynamodb-local | xargs docker stop