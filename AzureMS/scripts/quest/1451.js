var status = -1;

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
            if (qm.getQuestStatus(1451) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(1451) == 1) {
		qm.sendYesNo("�״뿡�� ������ ������ �������� ������ �����Ͽ���. ���� �� �̻��� ������ �ʿ����� �ʴٳ�... ������ ���谡�� �ǰڴ°�?");
	    }
        } else if (status == 1) {
            qm.forceCompleteQuest();
	    qm.gainItem(4031343,-1); 
	    qm.gainItem(4031344,-1);
	    qm.changeJob(qm.getJob() + 1);
	    qm.gainItem(1142110,1);
	    qm.showinfoMessage("<������ ���谡�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("�� ���� �����ο� ���谡���� �����ߴ� �״밡 ������ ���԰� ���� ����, ��⸦ ��� ���� ������ ���谡�� �Ǿ���.");
        } else if (status == 2) {
            qm.sendNext("�� ��� ���� ���� �̸� �����̶� �θ��� ������ ��ü ���� ������ �� �� �ְڴ°�.");
        } else if (status == 3) {
            qm.sendPrev("������ �¾�� ���� �ƴ϶� ������� �̷������ ��... �״�, ������ ������ �Ǿ� ������ ���带 �ùٸ� �������� �̲����ְ�.");
            qm.dispose();
	}
    }
}