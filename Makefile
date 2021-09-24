default: test

eslint:
	@echo "eslint"
	@./node_modules/.bin/eslint --max-warnings=0 .
	# @find . -name "*.js" -not -path "./node_modules/*" -print0 | xargs -0 ./node_modules/.bin/eslint

circular:
	@echo "circular"
	@./node_modules/.bin/madge --circular --exclude 'madge|source-map' .

mocha:
	@echo "mocha"
	@./node_modules/.bin/mocha test/*.js
	@echo

coverage:
	@echo "coverage"
	@./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha test/*
	@echo

test: eslint circular mocha coverage
	@echo "test done"
	@echo

