import * as Diff from 'diff';

export default (one, other) => {
    var diff = Diff.diffLines(one + '\n', other);
    var newer = '';
    diff.forEach((part) => {
        var pre = (part.added && '+') || (part.removed && '-') || ' ';
        var value = part.value.replace(/[^\n]+/g, (matches) => {
            return pre + matches;
        });
        newer += value;
    });
    return newer;
};