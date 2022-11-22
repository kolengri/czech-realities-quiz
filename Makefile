util:
	@ yarn hygen util new --subfolder $(word 2, $(MAKECMDGOALS))

component:
	@ yarn hygen component new $(word 2, $(MAKECMDGOALS))

test:
	@ yarn test
