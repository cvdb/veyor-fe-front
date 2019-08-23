# veyor-fe-front
Veyor front end coding challenge - react web app

# calls REST API veyor-fe-front
NOTE: this is a simple react app that displays a grid of images fetched from veyor-fe-front.

# Goal is to implement infinite scroll & paging
thinking about using https://github.com/bvaughn/react-virtualized
or https://github.com/bvaughn/react-window


NOTE: used free CSS template see: `public/FRACTAL_README.txt`

## Absolute Imports
I know that absoulte imports are better for larger projects but I use vim
and I get file path completion so I like to use relative imports, especially
when the folders are not nested much.

https://medium.com/@ktruong008/absolute-imports-with-create-react-app-4338fbca7e3d

## Storybook
Its great when developing larger projects but for this simple app its an overkill

## Would have added....
unfortunately I did not have that much free time......I would like to have added 2 more features:

* scrolling of the images without the use of the scroll bar....to act more like a mobile phone.
* on clicking an image display a bootstrap modal with a larger version of the image.

The url format of the images is `https://farm66.staticflickr.com/65535/48592965357_22ab22e082_z.jpg`
so simply changing the `_z.jpg` to `_m.jpg` would return a larger copy of the image.
