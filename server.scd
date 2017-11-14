(
OSCdef.new(\toggle,
	{
		arg msg, time, addr, port;
		[msg,time,addr,port].postln;
		Pbind(\amp, Pseq([1])).play();
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