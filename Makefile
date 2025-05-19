install:
	npm ci

brain-even:
	chmod +x bin/brain-even.js

brain-games:
	chmod +x bin/brain-games.js

brain-calc:
	chmod +x bin/brain-calc.js

brain-gcd:
	chmod +x bin/brain-gcd.js

brain-progression:
	chmod +x bin/brain-progression.js

brain-prime:
	chmod +x bin/brain-prime.js

publish:
	npm publish --dry-run

link:
	npm link;

lint:
	npx eslint --fix .