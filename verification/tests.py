"""
TESTS is a dict with all you tests.
Keys for this will be categories' names.
Each test is dict with
    "input" -- input data for user function
    "answer" -- your right answer
    "explanation" -- not necessary key, it's using for additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input": ["Hi"],
            "answer": False
        },
        {
            "input": ["I neeed HELP"],
            "answer": True
        },
        {
            "input": ["I neeed HLEP"],
            "answer": False
        }
    ],
    "Extra": [
        {
            "input": ["Hi"],
            "answer": False
        },
        {
            "input": ["HELP"],
            "answer": True
        },
        {
            "input": ["something is gona happen"],
            "answer": False
        },
        {
            "input": ["Hi!"],
            "answer": False
        },
        {
            "input": ["asap help"],
            "answer": True
        },
        {
            "input": ["h!e!l!p"],
            "answer": True
        },
        {
            "input": ["We need you A.S.A.P.!!"],
            "answer": True
        },
        {
            "input": ["where are you?!!!!"],
            "answer": True
        },
        {
            "input": ["UUUURGGGEEEEENT here"],
            "answer": True
        },
        {
            "input": ["Happy birthday"],
            "answer": False
        },
        {
            "input": ["I neeed your love"],
            "answer": False
        },
        {
            "input": ["U-R-G-E-N-T issue"],
            "answer": True
        },
        {
            "input": ["I’m REALLY happy on my vacation!"],
            "answer": False
        },
        {
            "input": ["This is very urgent!"],
            "answer": True
        },
        {
            "input": ["Heeeeeey!!! I’m having so much fun!”"],
            "answer": False
        },
        {
            "input": ["HI HOW ARE YOU?"],
            "answer": True
        },
        {
            "input": ["He loves peace"],
            "answer": False
        },
        {
            "input": ["Hello puppy"],
            "answer": False
        },
        {
            "input": ["Headlamp, wastepaper bin and supermagnificently"],
            "answer": False
        }
    ]
}
