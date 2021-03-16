#
# voice-skill-sdk
#
# (C) 2021, Deutsche Telekom AG
#
# This file is distributed under the terms of the MIT license.
# For details see the file LICENSE in the top directory.
#

#
# "develop" CLI command:
#
#   - starts skill-designer
#   - starts skill in development mode
#   - displays skill logs in "Test -> log output"
#   - modifies Python sources in "Design"
#

import argparse
import logging
import uvicorn

from skill_sdk.cli import import_module_app


def execute(arguments):
    """
    Run the app in "development" mode:

        set logging level to DEBUG
        logging format to human-readable
        override debug flag from configuration
        initialize Designer UI

    @param arguments:
    @return:
    """
    from skill_sdk import config, log, skill

    reload = True
    log.setup_logging(logging.DEBUG, config.FormatType.HUMAN)

    module_str, _, app_str = arguments.module.partition(":")
    if reload and app_str:
        config.settings.SKILL_DEBUG = True

    module, app = import_module_app(arguments.module)
    if app is None:
        app = skill.init_app(develop=True)
        # Cannot activate "reload" mode if application object not in format "file:app"
        reload = False

    run_config = config.settings.http_config()

    uvicorn.run(arguments.module if reload else app, reload=reload, **run_config)


def add_subparser(subparsers):

    run_parser = subparsers.add_parser(
        "develop",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
        help="Starts the skill in development mode.",
    )
    run_parser.add_argument("module", help="Run module", nargs="?", default="impl")
    run_parser.set_defaults(command=execute)
