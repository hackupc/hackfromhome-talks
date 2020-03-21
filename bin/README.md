# Hack From Home: Bin

This module contains the generic bash scripts that some other module could use.

## [Wait for it](wait-for-it.sh)

`wait-for-it.sh` is a pure bash script that will wait on the availability of a host and TCP port.  It is useful for synchronizing the spin-up of interdependent services, such as linked docker containers.  Since it is a pure bash script, it does not have any external dependencies.

### Usage

```bash
wait-for-it.sh host:port [-s] [-t timeout] [-- command args]
-h HOST | --host=HOST       Host or IP under test
-p PORT | --port=PORT       TCP port under test
                            Alternatively, you specify the host and port as host:port
-s | --strict               Only execute subcommand if the test succeeds
-q | --quiet                Don't output any status messages
-t TIMEOUT | --timeout=TIMEOUT
                            Timeout in seconds, zero for no timeout
-- COMMAND ARGS             Execute command with args after the test finishes
```

### References

This bash script is from the [wait-for-it GitHub repository](https://github.com/vishnubob/wait-for-it) from [Giles Hall](https://github.com/vishnubob).

