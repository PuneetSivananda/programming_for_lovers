from fasthtml.common import *
from datetime import datetime

app, rt = fast_app()

@rt("/timestamp")
def get_timestamp():
    return Div(f"Current time: {datetime.now()}", id="time")

@rt("/")
def get_home():
    # Return Title + Main content (or any FT components)
    return (
        Title("Live Timestamp"),
        Main(
            H1("App Header"),
            Div(
                id="time",
                _hx_get="/timestamp",
                _hx_trigger="every 2s",
                _hx_swap="outerHTML"
            ),
            cls="container"
        )
    )

serve()
        