(
OSCdef.new(\toggle,
	{
		arg msg, time, addr, port;
		var f = msg[1];
		var scl = Scale.major.ratios;
		var majtriad = [scl[0], scl[2], scl[4]];
		Pbind(\freq, Pseq(msg[1]*scl[0]),//Pseq([majtriad*msg[1]]),
			\amp, 1,
		).play();
	},
	'/test/1'
);
)


x = Synth.new(\tone);
x.free
x.set(\gate, 1, \amp, 1, \freq, 200)
x.free
s.meter

NetAddr.langPort

{SinOsc.ar}.play