import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { BookOpen, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface InstructionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function InstructionModal({ isOpen, onClose }: InstructionModalProps) {
    const { t } = useLanguage();

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="text-primary" />
                        {t('instructions.title') || "Como Instalar e Usar"}
                    </DialogTitle>
                    <DialogDescription>
                        {t('instructions.subtitle') || "Guia rápido para começar a usar o Mizin Youtube App"}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-none mt-1">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">1</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">{t('instructions.step1.title') || "Baixe o Arquivo"}</h4>
                                <p className="text-muted-foreground">
                                    {t('instructions.step1.desc') || "Clique no botão 'Baixar Ferramenta Gratuita' para salvar o arquivo .zip no seu computador."}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-none mt-1">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">2</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">{t('instructions.step2.title') || "Extraia os Arquivos"}</h4>
                                <p className="text-muted-foreground">
                                    {t('instructions.step2.desc') || "Clique com o botão direito no arquivo baixado e selecione 'Extrair Tudo' ou use seu descompactador preferido."}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-none mt-1">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">3</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">{t('instructions.step3.title') || "Execute o Aplicativo"}</h4>
                                <p className="text-muted-foreground">
                                    {t('instructions.step3.desc') || "Abra a pasta extraída e clique duas vezes em 'MizinYoutubeApp.exe' para iniciar. Não é necessário instalação!"}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 flex gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-500 flex-none" />
                        <div className="text-sm text-muted-foreground">
                            <p className="font-medium text-amber-500 mb-1">{t('instructions.note.title') || "Nota Importante"}</p>
                            {t('instructions.note.desc') || "O Windows pode exibir um aviso de proteção. Como é um aplicativo independente, clique em 'Mais informações' e depois em 'Executar mesmo assim'."}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
