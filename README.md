Turn your Karotz smart rabbit into a smart turret, without the lasers...
and with occasional interjections from a condescending master AI.

The [Glados](http://www.karotz.com/appz/app?id=3373) app is available in the Karotz Applications Store.


Building
========

You will need the [Karotz VM](https://github.com/jcheype/karotz-vm/downloads).
For utmost simplicity, download the latest version that contains its dependencies.
Place that jar file somewhere, then run this:

    $ java -jar /path/to/karotz-vm.jar -s .

For testing on your actual Karotz device, use the `-k` option instead, like so:

    $ java -jar /path/to/karotz-vm.jar -k .

Before testing on your actual device, you'll need to change *localhost* to the IP address
for your Karotz. To find the IP address, visit [My Objects](http://www.karotz.com/my/object) and click
on your Karotz.


Contributing
============

Have a feature you want to see implemented or a bug you'd like to see fixed?
Don't be shy! Create an issue in GitHub for it.

See an issue that you want to fix? Fork the project in GitHub, make some changes,
and submit a pull request.


License
=======

This project is unencumbered, free software. All contributions are public domain.
