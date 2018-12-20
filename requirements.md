
 ____________________
|				     |
|  Pocket Calculator |
|  (Midterm Project) |
|____________________|

Welcome to the Pocket Calculator!

This is our first project where you'll need to design and develop HTML, CSS, and JavaScript to build a full-featured application: an online calculator that you will present to the class. This will serve as 50% of your midterm score (with the other half coming from a written test).

The requirements aren't terribly complicated, but they are very specific. You'll be expected to meet them exactly as they're written. Almost doesn't count. Close enough never is.

______________________________________________________________________


Requirements

Every pocket calculator is a little different. We're going to use a calculator designed and implemented by Apple as an example. You needn't duplicate the design and style of the calculator, but you must provide the same minimum functionality (plus some optional nice-to-haves if you so choose).

______________________________________________________________________


Display

The display is responsible for showing computational results, as well as the intermediary values that go into those computations. When there is no value to display (i.e., when the page first loads), the display should default to 0. In rare instances, the display might also need to show error messages (i.e., if the user attempts to divide by 0). The display should have a fixed width, and it is your responsibility to ensure that values never overflow its bounds.

______________________________________________________________________


Digits

There should be a distinct button for each of the 10 digits (i.e., 0 through 9). As the user presses the digit buttons, those changes should be reflected (in order) in the calculator's display. Numbers that exceed 999 should be comma-delimited (i.e., 123,456,789). Remember, though, the calculator's display is only so wide. Limit input sizes to 999,999,999 so as not to overflow the boundaries of the display. Computational results that exceed this maximum value should be shown using scientific notation (i.e., 1e9 to represent 1,000,000,000).

______________________________________________________________________


Decimal Point

The decimal point should be designated its own button. When pressed, a decimal point (along with the implied 0 until and unless another digit is pressed) should be appended to the end of the display value.

______________________________________________________________________


Division

The <code>&divide;</code> button divides the current total (as stored in memory) by the next value entered by the user. If the next value entered by the user is not a number, display an error message. Mathematical operations can be chained together, so you'll need to make sure your calculator can handle multiple operations entered in sequence.

______________________________________________________________________


Multiplication

The <code>&times;</code> button multiplies the current total (as stored in memory) by the next value entered by the user. If the next value entered by the user is not a number, display an error message. Mathematical operations can be chained together, so you'll need to make sure your calculator can handle multiple operations entered in sequence.

______________________________________________________________________


Subtraction

The <code>-</code> button subtracts the next value entered by the user with the current total (as stored in memory). If the next value entered by the user is not a number, display an error message. Mathematical operations can be chained together, so you'll need to make sure your calculator can handle multiple operations entered in sequence.

______________________________________________________________________


Addition

The <code>+</code> button adds the next value entered by the user to the current total (as stored in memory). If the next value entered by the user is not a number, display an error message. Mathematical operations can be chained together, so you'll need to make sure your calculator can handle multiple operations entered in sequence.

______________________________________________________________________


Equals

The <code>=</code> button computes the potentially chained operations together, and shows this calculated total in the display. If the result of the operations is invalid (i.e., in the case of division by 0), display an error message.

______________________________________________________________________


Percentage

The <code>%</code> button converts the current total (as stored in memory) to a percentage (i.e., 78 would be converted to 0.78). Like the mathematical operators, the <code>%</code> operator, too, can be chained together with other operations.

______________________________________________________________________


Negation

The <code>+/-</code> button serves to negate numbers, effectively flipping their signs from positive to negative or negative to positive (i.e., 4 would be flipped to -4). Like the mathematical operators, the <code>+/-</code> operator, too, can be chained together with other operations.

______________________________________________________________________


Clear

The <code>AC</code> button on many pocket calculators serves the dual purpose of clearing either the entire display (and current total as stored in memory), or just the most recently entered number or operation. We're going to simplify things a bit. The <code>AC</code> button should clear everything. Display values, memory values, gone.

______________________________________________________________________


Nice-to-Haves

Nice-to-haves is a term in software development that refer to features of an application that aren't required, but would be (you guessed it!) nice to have. These features go above and beyond the minimum functional requirements of a pocket calculator (and start approaching scientific calculator territory).
* Powers <code>x<sup>2</sup></code>, <code>x<sup>3</sup></code>, and <code>x<sup>y</sup></code>)
* Roots (<code>&#8730;x</code>, <code><sup>3</sup>&#8730;x</code>, and <code><sup>y</sup>&#8730;x</code>)
* Factorial (`x!`)
* Constants (<code>&#960;</code>)
* Trigonometry (`sin`, `cos`, and `tan`)

______________________________________________________________________


Test Cases

Building a robust application requires a lot of testing. Here's a push in the right direction, but do not consider these test cases alone sufficient to validate your application.

Coming soon...

______________________________________________________________________


Deadline

Your Canvas submission is due at or before 11:59pm on TBD (pending midterm schedule).

______________________________________________________________________


Submission Requirements

All that is required for submission is the public URL (i.e., the GitHub Pages URL) to your [GitHub](https://github.com/) repository for this problem set. If you forgot how to create a public URL for your repository, reread the [original instructions from Problem Set 3¾](https://canvas.instructure.com/courses/1408038/pages/github-pages?module_item_id=19614011).