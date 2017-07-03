//Dont change it
//Dont change it
requirejs(['ext_editor_io', 'jquery_190'],
    function (extIO, $) {
        function stressfulSubjectCanvas(dom, subj) {
            const RW = 'help asap urgent';
            const rws = RW.split(' ');
            const make_idxs = ms=>{
                let wk_idxs = [];
                ms.forEach(m=>{
                    const f = subj.indexOf(m);
                    wk_idxs.push({f: f, t: f + m.length});
                });
                return wk_idxs;
            };
            const make_span = (tx, cls)=>{
                let span = $("<span></span>").text(tx);
                span.addClass(cls);
                return span;
            };

            let idxs =[]

            // detect RED_WORDS
            for (let i=0; i < rws.length; i += 1) {
                const rw = rws[i];
                let reg = [];

                for (let i=0; i < rw.length; i += 1)
                    reg.push(rw[i]);

                const r = new RegExp(reg.join('+[^a-zA-Z]*'), 'ig');
                const ms = subj.match(r);
                if (ms)
                    idxs = idxs.concat(make_idxs(ms));
            }

            // detect RED_SAFFIX
            if (subj.match(/!!!$/))
                idxs.push({f: subj.length-3, t: subj.length});

            // detect uppercase only
            if (subj.match(/[A-Z]/) && ! subj.match(/[a-z]/))
                idxs = idxs.concat(make_idxs(subj.match(/[A-Z]+/g)));

            // resolve indexs intersection
            idxs.sort((a, b)=>a.f - b.f);
            let ok = false;
            while (! ok) {
                ok = true;
                for (let i=0; i < idxs.length; i += 1) {
                    for (let j=i+1; j < idxs.length; j += 1) {
                        if (idxs[i].t >= idxs[j].f &&
                            idxs[i].f <= idxs[j].t
                            ||
                            idxs[j].t >= idxs[i].f &&
                            idxs[j].f <= idxs[i].t) {

                            idxs[i] = {
                                f: Math.min(idxs[i].f, idxs[j].f),
                                t: Math.max(idxs[i].t, idxs[j].t)
                            };
                            idxs.splice(j, 1);
                            ok = false;
                            break;
                        }
                    }
                    if (! ok)
                        break;
                }
            }

            // add element
            let off_set = 0;
            for (let i=0; i < idxs.length; i += 1) {
                dom.append(make_span(
                    subj.slice(off_set, idxs[i].f), 'normal'));
                dom.append(make_span(
                    subj.slice(idxs[i].f, idxs[i].t), 'red_word'));
                off_set = idxs[i].t; 
            }
            dom.append(make_span(
                subj.slice(off_set, subj.length), 'normal'));
        }
        
        var $tryit;

        var io = new extIO({
            functions: {
                js: 'isStressful',
                python: 'is_stressful'
            },
            animation: function($expl, data){
                var checkioInput = data.in;
                if (!checkioInput)
                    return;
                stressfulSubjectCanvas($expl, checkioInput);
            }
        });
        io.start();
    }
);
