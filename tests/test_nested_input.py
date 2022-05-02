import ast

import pytest
from .utils import build_relative_glob, unit_test_with
from turms.config import GeneratorConfig
from turms.run import generate_ast
from turms.plugins.enums import EnumsPlugin
from turms.plugins.inputs import InputsPlugin
from turms.plugins.fragments import FragmentsPlugin
from turms.plugins.operations import OperationsPlugin
from turms.plugins.funcs import (
    FunctionDefinition,
    FuncsPlugin,
    FuncsPluginConfig,
)
from turms.stylers.snake_case import SnakeCaseStyler
from turms.stylers.capitalize import CapitalizeStyler
from turms.helpers import build_schema_from_glob


@pytest.fixture()
def nested_input_schema():
    return build_schema_from_glob(build_relative_glob("/schemas/nested_inputs.graphql"))


def test_nested_input_funcs(nested_input_schema):
    config = GeneratorConfig(
        documents=build_relative_glob("/documents/nested_inputs/*.graphql"),
    )
    generated_ast = generate_ast(
        config,
        nested_input_schema,
        stylers=[CapitalizeStyler(), SnakeCaseStyler()],
        plugins=[
            EnumsPlugin(),
            InputsPlugin(),
            FragmentsPlugin(),
            OperationsPlugin(),
            FuncsPlugin(
                config=FuncsPluginConfig(
                    definitions=[
                        FunctionDefinition(
                            type="mutation",
                            use="tests.mocks.aquery",
                            is_async=False,
                        ),
                        FunctionDefinition(
                            type="mutation",
                            use="tests.mocks.aquery",
                            is_async=True,
                        ),
                    ]
                ),
            )
        ],
    )

    unit_test_with(generated_ast, "")


def test_default_input_funcs(nested_input_schema):
    config = GeneratorConfig(
        documents=build_relative_glob("/documents/inputs_default/*.graphql"),
    )
    generated_ast = generate_ast(
        config,
        nested_input_schema,
        stylers=[CapitalizeStyler(), SnakeCaseStyler()],
        plugins=[
            EnumsPlugin(),
            InputsPlugin(),
            FragmentsPlugin(),
            OperationsPlugin(),
            FuncsPlugin(
                config=FuncsPluginConfig(
                    definitions=[
                        FunctionDefinition(
                            type="mutation",
                            use="tests.mocks.aquery",
                            is_async=False,
                        ),
                        FunctionDefinition(
                            type="mutation",
                            use="tests.mocks.aquery",
                            is_async=True,
                        ),
                    ]
                ),
            )
        ],
    )

    unit_test_with(generated_ast, "")
