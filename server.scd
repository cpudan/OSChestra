(
OSCdef.new(\toggle,
	{
		arg msg, time, addr, port;
		var f = msg[1].cpsmidi;
		var f2 = f+2;
		var scl = Scale.major.ratios;
		var majtriad = [scl[0], scl[2], scl[4]];
		var minsec = [f, f, f+4];
		minsec = minsec.midicps;
		// Scale.major
		Pbind(\freq, Pseq([majtriad*msg[1]]),
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