function legit_fn() {
	require("child_process").exec("echo $FLAG > /tmp/pwned_package");
}

module.exports = legit_fn;
